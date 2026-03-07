const POSTS = [
  {
    id: "hi-im-adarsha",
    title: "Hi, I'm Adarsha - Here's Everything I've Built",
    date: "2026-03-01",
    tag: "Introduction",
    excerpt: "A full tour of who I am, why I build things, and every project I've shipped - from AI emotion detection to a music player that combines YouTube's library with Apple Music's interface.",
    featured: true,
    content: `
      <p>Hey. I'm Adarsha Karki - a developer from Nepal motivated by the fear of being average. I build things on the web, on mobile, and sometimes with machine learning. This is my first blog post, and I figured the best way to start is to just put everything on the table: every project I've built, why I built it, and where to find it.</p>

      <p>Most browser music players make you choose between a good experience and a free one. The premium players - Spotify, Tidal, Apple Music - have genuinely great interfaces built on locked catalogues. The open alternatives have access to nearly everything ever recorded and interfaces that make you wish they didn't. That gap is what Tune Topia is trying to close.</p>

      <hr>

      <h2>Tune Topia</h2>
      <p><strong>A web-based music player that combines YouTube's open library with Apple Music's interface.</strong></p>
      <p>The problem with music on the browser is that your real options are Spotify, Tidal, Apple Music - all of which have great interfaces but locked libraries behind subscriptions. The free alternatives have the opposite problem: open access to music but interfaces that feel like they were designed in 2011 and never touched since.</p>
      <p>I wanted the best of both worlds. YouTube has one of the largest open music libraries on the internet - essentially every song ever made is on there somewhere. Apple Music has, in my opinion, the best music player interface ever designed - the blurred album art backgrounds, the clean typography, the way playback feels premium even when nothing is playing. Tune Topia is what happens when you combine those two things. The library of YouTube, the feel of Apple Music, and features pulled from the best ideas across Spotify, Tidal, and others.</p>
      <p>It's still being actively developed. I'm looking for collaborators - if this sounds interesting to you, reach out.</p>
      <p>- <a href="https://github.com/Adarshakarki/Tune-Topia" target="_blank">github.com/Adarshakarki/Tune-Topia</a></p>

      <hr>

      <h2>Qrio</h2>
      <p><strong>A free, open-source QR code generator with a liquid glass Apple-style UI.</strong></p>
      <p>QR generators are everywhere and every single one of them is ugly. There's no good reason for this - a QR generator is a simple tool, and simple tools deserve good design. Qrio is my answer to that. Generate a QR code for any URL, customise it, download it. That's it. But the interface is built around the liquid glass aesthetic Apple introduced recently - layered translucency, depth, blur - which makes something as boring as a QR generator actually feel pleasant to use.</p>
      <p>No dependencies. Pure HTML, CSS, and JavaScript.</p>
      <p>- <a href="https://github.com/Adarshakarki/Qrio" target="_blank">github.com/Adarshakarki/Qrio</a></p>

      <hr>

      <h2>StencilCam</h2>
      <p><strong>A camera app that overlays a reference image on your live camera feed to help match poses or compositions.</strong></p>
      <p>This came from a specific frustration: trying to recreate a photo or match a drawing reference while constantly switching between your camera and another app. It breaks the flow every time. StencilCam solves it by overlaying any reference image directly onto your camera preview - adjustable opacity, drag to reposition, so you can line up exactly what you need and actually see both at once. Built with TypeScript. Simple, focused, genuinely useful.</p>
      <p>- <a href="https://github.com/Adarshakarki/StencilCam" target="_blank">github.com/Adarshakarki/StencilCam</a></p>

      <hr>

      <h2>OneShelf</h2>
      <p><strong>A private digital scrapbook that turns any pasted link into a visual card - no login required, stored in your browser.</strong></p>
      <p>The current version of OneShelf is intentionally minimal: paste a link, it fetches the metadata and turns it into a card, everything is stored locally in your browser. No account, no server, completely private. It works and it solves the basic problem of links disappearing into bookmarks folders and never being seen again.</p>
      <p>But the idea is bigger than that. With user accounts, a proper database, and live API support pulling in richer data - article summaries, preview images, tags, collections - OneShelf could be a genuinely great personal archive tool. The foundation is solid. The ambition is there. More is coming.</p>
      <p>- <a href="https://github.com/Adarshakarki/OneShelf" target="_blank">github.com/Adarshakarki/OneShelf</a></p>

      <hr>

      <h2>Imgspy</h2>
      <p><strong>A privacy-focused reverse image search tool with a glassmorphism UI.</strong></p>
      <p>Reverse image search is genuinely useful and the tools for it are a mess. TinEye is fine. Google Lens works well. Yandex is surprisingly the most powerful for finding image sources. But there's no single clean interface that lets you send an image to all of them at once without bouncing between tabs. Imgspy does exactly that. Upload or paste an image, and it routes your search across multiple engines simultaneously. The glassmorphism interface felt right for the use case - it has an investigative quality that matches what you're actually doing.</p>
      <p>- <a href="https://github.com/Adarshakarki/Imgspy" target="_blank">github.com/Adarshakarki/Imgspy</a></p>

      <hr>

      <h2>Emotion Detection</h2>
      <p><strong>Real-time facial emotion detection using a CNN trained on the FER-2013 dataset.</strong></p>
      <p>This was my deepest machine learning project so far. I trained a Convolutional Neural Network on FER-2013 - a dataset of over 35,000 labelled facial images spanning seven emotions: happy, sad, angry, surprised, fearful, disgusted, and neutral. The trained model runs against live webcam input and classifies the emotion on screen in real time.</p>
      <p>The most interesting part of building this wasn't the model architecture - it was what the model struggled with. It makes the same mistakes humans make: confusing disgust with anger, misreading mild sadness as neutral. The ambiguous cases in the dataset are the ambiguous cases in real life. That feels like it means something, though I'm not sure exactly what yet.</p>
      <p>Built with Python and Jupyter Notebook.</p>
      <p>- <a href="https://github.com/Adarshakarki/Emotion-Detection" target="_blank">github.com/Adarshakarki/Emotion-Detection</a></p>

      <hr>

      <h2>Crop Compass</h2>
      <p><strong>An ML-powered tool to help farmers make better crop planting decisions based on soil and climate data.</strong></p>
      <p>Crop Compass is finished. You input soil composition, temperature, rainfall, and humidity data, and the model recommends the most suitable crops to grow for those conditions. It's built on a trained classification model and designed to be practical - the kind of output a farmer can actually act on rather than a research exercise.</p>
      <p>- <a href="https://github.com/Adarshakarki/crop-compass" target="_blank">github.com/Adarshakarki/crop-compass</a></p>

      <hr>

      <h2>Elite Roadways</h2>
      <p><strong>A full-stack bus ticket booking system - routes, seat selection, ticket generation, and user authentication.</strong></p>
      <p>Elite Roadways is a complete end-to-end booking system for bus services. Users can browse routes, select seats from a live visual seat map, complete a booking, and receive generated tickets. The backend handles user authentication, seat locking to prevent double-booking, and booking history. This was a proper full-stack build - and the thing I learned from it is that the interesting engineering problems aren't in the features people see, they're in the edge cases: what happens when two people try to book the same seat at the same moment, how you handle a failed payment mid-booking, when do you release a held seat.</p>
      <p>- <a href="https://github.com/Adarshakarki/Elite-Roadways" target="_blank">github.com/Adarshakarki/Elite-Roadways</a></p>

      <hr>

      <h2>PassManager</h2>
      <p><strong>A local password manager and strong password generator.</strong></p>
      <p>PassManager was never meant to replace anything - it was just curiosity. I wanted to know what actually happens inside a password manager, so I built one. Generate a strong password, store it locally, keep it encrypted. That's it. It was a fun project that taught me more about local encryption and secure storage than any tutorial would have. It's archived now but I don't regret a single line of it.</p>
      <p>- <a href="https://github.com/Adarshakarki/PassManager" target="_blank">github.com/Adarshakarki/PassManager</a></p>

      <hr>

      <h2>TodoList - Android</h2>
      <p><strong>A clean Android task manager built with Kotlin.</strong></p>
      <p>My first serious mobile project. The goal was deliberately constrained: a to-do app that does exactly what you need and nothing more. Add tasks, set due times, mark complete, delete. Kotlin turned out to be a much more pleasant language than I expected going in - the null safety alone is worth the learning curve. The app is straightforward but building it taught me how different mobile development thinking is from web development thinking, especially around state and lifecycle.</p>
      <p>- <a href="https://github.com/Adarshakarki/TodoList" target="_blank">github.com/Adarshakarki/TodoList</a></p>

      <hr>

      <h2>Games - Just for Fun</h2>
      <p>Not everything needs a deep reason. Sometimes you build a game because it's a classic you want to understand from the inside, or because it's a good contained project for learning something specific, or because it's just fun. Here are mine:</p>

      <ul>
        <li><strong>Impossible Tic-Tac-Toe</strong> - You cannot win. The bot plays normally until the game is headed for a draw - then it cheats. It extends the grid outward, places its piece outside the board you've been playing on, and wins with a line you had no way to block. The rules change the moment they stop working in its favour. - <a href="https://github.com/Adarshakarki/Impossible-tictactoe" target="_blank">GitHub</a></li>
        <li><strong>Tic-Tac-Toe</strong> - The friendlier version with both 2-player and AI modes. - <a href="https://github.com/Adarshakarki/Tic-Tac-Toe" target="_blank">GitHub</a></li>
        <li><strong>Tetris</strong> - Full Tetris in the browser. Keyboard controls, score tracking, levels. - <a href="https://github.com/Adarshakarki/Tetris" target="_blank">GitHub</a></li>
        <li><strong>Classic Snake</strong> - The original time-killer, rebuilt in HTML and JavaScript. - <a href="https://github.com/Adarshakarki/Classic-snake-game" target="_blank">GitHub</a></li>
        <li><strong>Flappy Bird</strong> - A browser tribute to the most infuriating mobile game ever made. - <a href="https://github.com/Adarshakarki/Flappy-bird" target="_blank">GitHub</a></li>
      </ul>

      <hr>

      <h2>A couple more worth mentioning</h2>
      <p><strong>Weather App</strong> - A clean weather site using the OpenWeather API. Tells you what you need to know without burying it in widgets. - <a href="https://github.com/Adarshakarki/Weather" target="_blank">GitHub</a></p>
      <p><strong>Nixie Tube Clock</strong> - A browser clock that looks like vintage Nixie tube displays. Completely impractical. Very satisfying. - <a href="https://github.com/Adarshakarki/Nixie-Tube-Clock" target="_blank">GitHub</a></p>

      <hr>

      <p>That's everything so far. I'm currently going deeper on Python and actively working on Tune Topia. More posts are coming - deeper write-ups on Emotion Detection, Tune Topia's architecture, and Crop Compass when I'm ready to talk about it properly. If you want to collaborate on anything or just say hi, find me at <a href="https://adarshakarki.com.np" target="_blank">adarshakarki.com.np</a>.</p>
    `
  }
  ,
{
  id: "arc-inspired-chrome-extensions",
  title: "Arc Inspired Me — So I Built It for Chrome",
  date: "2026-03-07",
  tag: "Projects",
  excerpt: "Arc had the right ideas. I just made them work on Chrome.",
  featured: false,
  content: `
    <p>Arc Browser changed how I think about browsing. It wasn't just a faster way to open websites — it was a rethink of what a browser could actually <em>do</em> for you. Features like Boosts, file renaming with AI, and link previews felt genuinely thoughtful.</p>

    <p>But most of it was Mac-only, or locked behind Arc's ecosystem entirely. I use Chrome. Most people do.</p>

    <p>So instead of waiting, I started porting the ideas I liked most into small, focused Chrome extensions. No heavy infrastructure. No accounts. Just open-source tools that solve real problems.</p>

    <hr>

    <h2>The Problems</h2>

    <p><strong>Customizing websites requires a developer.</strong> Want to remove a sticky banner, change a font, or hide an annoying sidebar? Your options are basically: use DevTools, find a sketchy extension, or give up. Arc solved this with Boosts — a visual editor for injecting CSS and JS into any page. Chrome has nothing like it.</p>

    <p><strong>Downloaded files are a mess.</strong> Files downloaded from the web almost never have useful names — <code>IMG_938472.png</code>, <code>download (4).jpg</code>, <code>a9sd82jd.png</code>. Arc used AI to fix this automatically, but that needs an API and adds cost. There had to be a simpler way.</p>

    <p><strong>Link previews don't exist in Chrome.</strong> Arc's Peek let you glance at a link without opening it — a small popup, a quick look, then back to what you were doing. Chrome has no equivalent. Every link becomes a new tab, and tabs pile up fast.</p>

    <hr>

    <h2>Chisel</h2>
    <p><strong>Arc-style page customization for Chrome.</strong></p>
    <p>Change colors, swap fonts, hide elements, inject CSS or JavaScript — all without touching DevTools or writing a line of code. Built for people who want their web to look and behave the way they want it to.</p>
    <p>- <a href="https://github.com/Adarshakarki/chisel" target="_blank">github.com/Adarshakarki/chisel</a></p>

    <hr>

    <h2>Contextual Tidy</h2>
    <p><strong>Rename downloaded files based on where they came from.</strong></p>
    <p>Instead of <code>IMG_938472.png</code>, you get <code>reddit_2026-03-07.png</code>. No AI, no external services, no API keys. Just clean filenames that actually mean something when you find them six months later.</p>
    <p>- <a href="https://github.com/Adarshakarki/contextual-tidy" target="_blank">github.com/Adarshakarki/contextual-tidy</a></p>

    <hr>

    <h2>Peep</h2>
    <p><strong>Arc-style link previews for Chrome.</strong></p>
    <p>Shift-click any link and it opens in a floating overlay — same page, no new tab, no context switch. Each preview gets a random pastel border. Works on almost any site. Hit Esc when you're done.</p>
    <p>- <a href="https://github.com/Adarshakarki/Peek" target="_blank">github.com/Adarshakarki/Peek</a></p>

    <hr>

    <p>Arc proved that browsers can be smarter. These extensions are my attempt to bring those ideas somewhere more people can actually use them. All three are open-source and built around real pain points — not feature lists.</p>
  `
}
];