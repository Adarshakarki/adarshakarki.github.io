// ─────────────────────────────────────────────
//  BLOG ENGINE
// ─────────────────────────────────────────────

const Blog = (() => {

  // ── Utilities ──────────────────────────────

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  function formatDate(str) {
    const d = new Date(str + 'T00:00:00');
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  function slugify(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  function getAllTags() {
    const tags = new Set();
    POSTS.forEach(p => { if (p.tag) tags.add(p.tag); });
    return [...tags].sort();
  }

  // ── Router (hash-based) ─────────────────────

  function getRoute() {
    const hash = window.location.hash.slice(1); // e.g. "/post/my-slug"
    if (!hash || hash === '/') return { page: 'home', tag: null };
    if (hash.startsWith('/tag/')) return { page: 'home', tag: decodeURIComponent(hash.slice(5)) };
    if (hash.startsWith('/post/')) return { page: 'post', id: hash.slice(6) };
    return { page: 'home', tag: null };
  }

  function navigate(hash) {
    window.location.hash = hash;
  }

  // ── Render: Home ────────────────────────────

  function renderHome(activeTag = null) {
    const main = $('#main-content');
    main.innerHTML = '';

    const posts = activeTag
      ? POSTS.filter(p => p.tag === activeTag)
      : POSTS;

    // Hero (only show without tag filter)
    if (!activeTag) {
      const hero = document.createElement('div');
      hero.className = 'hero';
      hero.innerHTML = `
        <div class="hero-text">
          <div class="hero-label">Personal Blog</div>
          <h1>Ideas worth <em>writing</em> down.</h1>
        </div>
        <div class="hero-meta">
          <div class="issue-num">${String(POSTS.length).padStart(2, '0')}</div>
          <div class="hero-sub">A collection of thoughts on technology, craft, and the things I'm figuring out.</div>
        </div>
      `;
      main.appendChild(hero);
    }

    // Grid
    const grid = document.createElement('div');
    grid.className = 'main-grid';

    // Posts
    const postsCol = document.createElement('div');

    if (posts.length === 0) {
      postsCol.innerHTML = `
        <div class="empty-state">
          <div style="font-family:var(--serif);font-size:1.5rem;color:var(--text-muted)">No posts in this category yet.</div>
          <p>Check back soon.</p>
        </div>`;
    } else {
      const list = document.createElement('div');
      list.className = 'posts-list';

      posts.forEach((post, i) => {
        const card = document.createElement('div');
        card.className = `post-card fade-up${post.featured && !activeTag ? ' featured' : ''}`;
        card.setAttribute('style', `animation-delay:${i * 0.07}s`);

        if (post.featured && !activeTag) {
          card.innerHTML = `
            <div>
              <span class="featured-badge">Featured</span>
              <div class="post-tag">${post.tag || ''}</div>
              <div class="post-title">${post.title}</div>
              <div class="post-excerpt">${post.excerpt}</div>
              <div class="post-date" style="margin-top:1rem">${formatDate(post.date)}</div>
            </div>`;
        } else {
          card.innerHTML = `
            <div>
              <div class="post-tag">${post.tag || ''}</div>
              <div class="post-title">${post.title}</div>
              <div class="post-excerpt">${post.excerpt}</div>
            </div>
            <div class="post-date">${formatDate(post.date)}</div>`;
        }

        card.addEventListener('click', () => navigate(`/post/${post.id}`));
        list.appendChild(card);
      });

      postsCol.appendChild(list);
    }

    // Sidebar
    const sidebar = renderSidebar(activeTag);

    grid.appendChild(postsCol);
    grid.appendChild(sidebar);
    main.appendChild(grid);

    // Update nav active
    $$('nav a').forEach(a => a.classList.remove('active'));
    const homeLink = $('nav a[href="#/"]');
    if (homeLink) homeLink.classList.add('active');
  }

  // ── Render: Single Post ─────────────────────

  function renderPost(id) {
    const post = POSTS.find(p => p.id === id);
    const main = $('#main-content');

    if (!post) {
      main.innerHTML = `
        <div class="main-grid" style="display:block;max-width:700px">
          <div style="padding:4rem 2rem;text-align:center;">
            <div style="font-family:var(--serif);font-size:2rem;color:var(--text-muted)">Post not found.</div>
            <div style="margin-top:1rem">
              <span class="back-link" id="back-btn">← Back to all posts</span>
            </div>
          </div>
        </div>`;
      $('#back-btn').addEventListener('click', () => navigate('/'));
      return;
    }

    main.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.className = 'post-page fade-up';

    const article = document.createElement('article');
    article.innerHTML = `
      <span class="back-link" id="back-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
        All Posts
      </span>
      <header class="post-header">
        <div class="post-tag">${post.tag || ''}</div>
        <h1 class="post-title">${post.title}</h1>
        <div class="post-byline">
          <span>${formatDate(post.date)}</span>
          <span class="post-byline-sep"></span>
          <span>${readingTime(post.content)} min read</span>
        </div>
      </header>
      <div class="post-content">${post.content}</div>
    `;

    article.querySelector('#back-btn').addEventListener('click', () => navigate('/'));

    const sidebar = renderSidebar(null, id);

    wrapper.appendChild(article);
    wrapper.appendChild(sidebar);
    main.appendChild(wrapper);
  }

  function readingTime(html) {
    const text = html.replace(/<[^>]+>/g, '');
    const words = text.trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
  }

  // ── Render: Sidebar ─────────────────────────

  function renderSidebar(activeTag = null, currentPostId = null) {
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';

    // Recent posts
    const recent = POSTS.filter(p => p.id !== currentPostId).slice(0, 5);
    const recentHTML = recent.map(p => `
      <div class="sidebar-post" data-id="${p.id}">
        <div class="sidebar-post-title">${p.title}</div>
        <div class="sidebar-post-date">${formatDate(p.date)}</div>
      </div>`).join('');

    // Tags
    const tags = getAllTags();
    const tagsHTML = tags.map(t => `
      <span class="tag-pill${t === activeTag ? ' active' : ''}" data-tag="${t}">${t}</span>
    `).join('');

    sidebar.innerHTML = `
      <div class="sidebar-section">
        <div class="sidebar-title">Recent Posts</div>
        ${recentHTML}
      </div>
      <div class="sidebar-section">
        <div class="sidebar-title">Topics</div>
        <div class="tag-cloud">${tagsHTML}</div>
      </div>
    `;

    // Wire up sidebar clicks
    sidebar.querySelectorAll('.sidebar-post').forEach(el => {
      el.addEventListener('click', () => navigate(`/post/${el.dataset.id}`));
    });

    sidebar.querySelectorAll('.tag-pill').forEach(el => {
      el.addEventListener('click', () => {
        const tag = el.dataset.tag;
        if (tag === activeTag) {
          navigate('/');
        } else {
          navigate(`/tag/${encodeURIComponent(tag)}`);
        }
      });
    });

    return sidebar;
  }

  // ── Init ────────────────────────────────────

  function render() {
    const route = getRoute();
    window.scrollTo(0, 0);
    if (route.page === 'home') {
      renderHome(route.tag || null);
    } else if (route.page === 'post') {
      renderPost(route.id);
    }
  }

  function init() {
    window.addEventListener('hashchange', render);
    // Default to home if no hash
    if (!window.location.hash) window.location.hash = '/';
    render();
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', () => Blog.init());
