import { Router } from 'express';

const router = Router();

router.post('/actions', (req, res) => {
    console.log("actions router trigger");
    res.json({
        appName: 'test',
    });
});

export { router };
