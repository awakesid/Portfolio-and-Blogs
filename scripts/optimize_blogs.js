import fs from 'fs';
import path from 'path';

const BLOG_DIR = path.join(process.cwd(), 'src', 'pages', 'blog');
const SITE_URL = 'https://awakesid.netlify.app';

const NAV_HTML = `
  <!-- ── Navigation (consistent with home page) ── -->
  <nav class="blog-nav">
    <a href="/" class="home-link" aria-label="Home">
      <svg class="homeicon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" preserveAspectRatio="xMinYMid meet">
        <g transform="translate(-4, 0)">
          <path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"/>
        </g>
      </svg>
    </a>

    <a href="/project" class="project-link" aria-label="Projects">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
        <path fill="currentColor" fill-rule="evenodd" d="m85.333 160.617l128-74l.043.025L256 62l-42.667-24.666L42.667 136v197.333L85.333 358zm87.581 23.701l104.419-60.367l104.43 60.373l-104.419 60.368zm-23.581 35.651V346.05L256 407.716v-126.08zm256 126.081l-106.667 61.666V281.649l106.667-61.667zm-128-271.383L448 173.333v197.334l-170.667 98.667l-170.666-98.667V173.333z" clip-rule="evenodd" />
      </svg>
    </a>

    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" id="darkModeToggle" aria-label="Toggle dark mode" role="button">
      <path fill="currentColor" d="M12 17q-2.075 0-3.537-1.463T7 12t1.463-3.537T12 7t3.538 1.463T17 12t-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z" />
    </svg>

    <a href="/blog" class="blog-link" aria-label="Blog">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" preserveAspectRatio="xMinYMid meet">
        <g transform="translate(1.8, 0)">
          <path fill="currentColor" d="m16.89 1.2l1.41 1.41c.39.39.39 1.02 0 1.41L14 8.33V18H3V3h10.67l1.8-1.8c.4-.39 1.03-.4 1.42 0m-5.66 8.48l5.37-5.36l-1.42-1.42l-5.36 5.37l-.71 2.12z" />
        </g>
      </svg>
    </a>
  </nav>

  <!-- ── Divider ── -->
  <div class="blog-divider">
    <hr>
  </div>
`;

const FOOTER_HTML = `
  <!-- ── Footer (consistent with home page) ── -->
  <footer class="blog-footer">
    <div class="spart">
      <a href="https://github.com/awakesid" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <mask id="SVGtXXaGeHA" width="24" height="24" x="0" y="0">
            <g fill="#fff">
              <ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
              <ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
            </g>
          </mask>
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3" />
            <path d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5" />
          </g>
          <rect width="8" height="4" x="8" y="11" fill="currentColor" mask="url(#SVGtXXaGeHA)">
            <animate attributeName="y" dur="10s" keyTimes="0;0.45;0.46;0.54;0.55;1" repeatCount="indefinite" values="11;11;7;7;11;11" />
          </rect>
        </svg>
      </a>

      <a href="https://www.linkedin.com/in/siddartha-gupta/" target="_blank" aria-label="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <circle cx="4" cy="4" r="2" fill="currentColor" fill-opacity="1" />
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
            <path d="M4 10v10" />
            <path d="M10 10v10" />
            <path d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5" />
          </g>
        </svg>
      </a>

      <div class="tooltip" id="mailBtn" aria-label="Copy email">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z" />
            <path d="M3 6.5l9 5.5l9 -5.5" />
          </g>
        </svg>
        <span class="tooltip-text">copied!</span>
      </div>

      <a href="/assets/Siddartha_Gupta_Resume.pdf" download="Siddartha_Gupta_Resume.pdf" aria-label="Download resume">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M12 4l7 0c0.55 0 1 0.45 1 1l0 14c0 0.55 -0.44 1 -1 1l-14 0c-0.55 0 -1 -0.45 -1 -1l0 -14c0 -0.55 0.45 -1 1 -1Z" />
            <path d="M12 7l0 9.5" />
            <path d="M12 17l4 -4M12 17l-4 -4" />
          </g>
        </svg>
      </a>
    </div>
  </footer>
`;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath);

  // Skip if already optimized with SEO Metadata marker
  if (content.includes('<!-- SEO Metadata -->')) {
    console.log("Skipping " + filename + " (already SEO optimized)");
    return;
  }

  // Aggressive cleanup of legacy tags, comments, and debris
  content = content.replace(/<!-- SEO Metadata -->[\s\S]*?<!-- End SEO Metadata -->/gi, '');
  content = content.replace(/<!--.*?Open Graph.*?-->/gi, '');
  content = content.replace(/<!--.*?Twitter.*?-->/gi, '');
  content = content.replace(/<!--.*?Structured Data.*?-->/gi, '');
  content = content.replace(/<link rel="canonical"[^>]*>/gi, '');
  content = content.replace(/<meta name="description"[^>]*>/gi, '');
  content = content.replace(/<meta property="og:[^>]+"[^>]*>/gi, '');
  content = content.replace(/<meta property="twitter:[^>]+"[^>]*>/gi, '');
  content = content.replace(/<meta property="title"[^>]*>/gi, '');
  content = content.replace(/<meta name="title"[^>]*>/gi, '');
  content = content.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');

  // Remove StackEdit stylesheet
  content = content.replace(/<link rel="stylesheet" href="https:\/\/stackedit\.io\/style\.css" \/>/i, '');

  // Cleanup previously injected theme elements
  content = content.replace(/<link rel="stylesheet" href="\/styles\.css" \/>/g, '');
  content = content.replace(/<link rel="stylesheet" href="\/blog-theme\.css" \/>/g, '');
  content = content.replace(/<script src="\/scripts\.js" defer><\/script>/g, '');

  // Cleanup excessive whitespace in head
  content = content.replace(/<head>[\s\n]*/i, '<head>\n  ');
  content = content.replace(/(\n\s*){3,}/g, '\n\n');

  // Extract Info
  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : filename.replace('.html', '');
  const descMatch = content.match(/<p>([\s\S]{50,200}?)<\/p>/i);
  const description = descMatch ? descMatch[1].replace(/<[^>]+>/g, '').trim() : `Blog post: ${title}`;
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/i);
  const imageUrl = imgMatch ? imgMatch[1] : `${SITE_URL}/assets/mm.gif`;
  const pageUrl = `${SITE_URL}/blog/${filename.replace('.html', '')}`;

  const seoTags = `
  <!-- SEO Metadata -->
  <link rel="canonical" href="${pageUrl}" />
  <meta name="description" content="${description}" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${pageUrl}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${imageUrl}" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="${pageUrl}" />
  <meta property="twitter:title" content="${title}" />
  <meta property="twitter:description" content="${description}" />
  <meta property="twitter:image" content="${imageUrl}" />

  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "${title}",
    "description": "${description}",
    "author": {
      "@type": "Person",
      "name": "Siddartha Gupta"
    },
    "url": "${pageUrl}",
    "image": "${imageUrl}"
  }
  </script>

  <link rel="stylesheet" href="/styles.css" />
  <link rel="stylesheet" href="/blog-theme.css" />
  <script src="/scripts.js" defer></script>
  <!-- End SEO Metadata -->`;

  // Inject
  if (content.includes('</head>')) content = content.replace('</head>', seoTags + '\n</head>');
  if (!content.includes('class="stackedit"')) content = content.replace(/<body([^>]*)>/i, '<body$1 class="stackedit">');
  if (!content.includes('blog-nav')) content = content.replace(/(<body[^>]*>)/i, "$1\n" + NAV_HTML);
  if (!content.includes('blog-footer')) content = content.replace("</body>", FOOTER_HTML + "\n</body>");

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log("Optimized: " + filename);
}

function run() {
  if (!fs.existsSync(BLOG_DIR)) return;
  const files = fs.readdirSync(BLOG_DIR);
  for (const file of files) {
    if (file.endsWith('.html')) processFile(path.join(BLOG_DIR, file));
  }
}

run();
