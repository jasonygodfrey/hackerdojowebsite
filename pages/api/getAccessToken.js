export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }
  
    const { authorizationCode } = req.body;
  
    try {
      const response = await fetch('https://secure.meetup.com/oauth2/access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: '9uu56vhlgu7rpu1pl2q4drj259',
          client_secret: process.env.MEETUP_CLIENT_SECRET,
          grant_type: 'authorization_code',
          redirect_uri: 'https://hackerdojowebsite.vercel.app/',
          code: authorizationCode,
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || 'Failed to get access token');
      }
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  