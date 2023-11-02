const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (context, req) => {
        context.log(`Http function processed request for url "${req.url}"`);

        const name = req.query.name || req.body || 'world';

        return { body: `Hello, ${name}!` };
    }
});