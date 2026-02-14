const { GoogleGenerativeAI } = require('@google/generative-ai');

module.exports = async (req, res) => {
    // CORS Headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Expecting POST request with { dinoId, tags }
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { dinoId, tags } = req.body;

    if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ error: 'Missing API Key configuration on server.' });
    }

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `
      You are a chaotic, funny dinosaur personality analyzer.
      The user got the result: ${dinoId}.
      Their quiz tags were: ${JSON.stringify(tags)}.
      
      Generate a short, spicy, and humorous personality description (max 3 sentences) for them based on this result. 
      Roast them a little bit but keep it fun. 
      Don't mention the tags explicitly, just use them to flavor the text.
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return res.status(200).json({ analysis: text });
    } catch (error) {
        console.error('AI Error:', error);
        return res.status(500).json({ error: 'Failed to generate dino analysis.' });
    }
};
