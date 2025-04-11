addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  if (
    url.hostname === 'static.ieumai.org' ||
    url.hostname === 'ieumai-cdn-proxy.luckytmrw.workers.dev'
  ) {
    const rewrittenPath = `/ieum-ai/ieumai-frontend/refs/heads/main/public/static${url.pathname}${url.search}`;
    const newUrl = `https://raw.githubusercontent.com${rewrittenPath}`;

    const originResponse = await fetch(newUrl);
    const newHeaders = new Headers(originResponse.headers);
    newHeaders.set('Cache-Control', 'public, max-age=86400');
    newHeaders.set('Access-Control-Allow-Origin', '*');

    return new Response(originResponse.body, {
      status: originResponse.status,
      statusText: originResponse.statusText,
      headers: newHeaders,
    });
  }

  return new Response('Not Found', { status: 404 });
}
