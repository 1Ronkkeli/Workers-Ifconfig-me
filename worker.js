export default {
  async fetch(request, env, ctx) {
    const clientIP = request.headers.get('cf-connecting-ip');

    return new Response(clientIP, {
      headers: { 'content-type': 'text/plain' },
    });
  },
};
