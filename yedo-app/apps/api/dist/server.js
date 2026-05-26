import Fastify from 'fastify';
import cors from '@fastify/cors';
import { DATA, SHEETS } from './data.js';
const app = Fastify({ logger: false });
const PORT = Number(process.env.PORT || 8787);
await app.register(cors, {
    origin: true
});
app.get('/health', async () => ({ status: 'ok', service: 'yedo-api' }));
app.get('/roles', async () => ({
    roles: Object.entries(DATA).map(([id, value]) => ({
        id,
        label: value.profile.badge,
        profile: value.profile,
        color: value.color
    }))
}));
app.post('/auth/demo-login', async (request, reply) => {
    const role = request.body?.role;
    if (!role || !DATA[role]) {
        return reply.code(400).send({ message: 'Rôle invalide' });
    }
    return {
        token: `demo-${role}-token`,
        role,
        user: DATA[role].profile
    };
});
app.get('/dashboard/:role', async (request, reply) => {
    const role = request.params.role;
    const data = DATA[role];
    if (!data) {
        return reply.code(404).send({ message: 'Rôle introuvable' });
    }
    return data;
});
app.get('/feed/:role', async (request, reply) => {
    const role = request.params.role;
    const data = DATA[role];
    if (!data) {
        return reply.code(404).send({ message: 'Rôle introuvable' });
    }
    return { role, feed: data.feed };
});
app.get('/modules/:role', async (request, reply) => {
    const role = request.params.role;
    const data = DATA[role];
    if (!data) {
        return reply.code(404).send({ message: 'Rôle introuvable' });
    }
    return { role, modules: data.modules, tip: data.tip };
});
app.get('/sheets/:sheetId', async (request, reply) => {
    const sheet = SHEETS[request.params.sheetId];
    if (!sheet) {
        return reply.code(404).send({ message: 'Fiche introuvable' });
    }
    return sheet;
});
app.listen({ port: PORT, host: '0.0.0.0' }).then(() => {
    console.log(`Yédo API listening on http://localhost:${PORT}`);
});
