import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import emailRouter from './routes/email';


const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/email', emailRouter);

app.get("/api", (req: Request, res: Response) => {
    res.send("Express on Vercel");
});

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, './build')));

    // Handle SPA by redirecting all requests to index.html
    app.get('*', (req, res, next) => {


        if (req.originalUrl.startsWith('/api')) {
            return next(); // Let API routes work normally
        }

        res.sendFile(path.join(__dirname, './build', 'index.html'));
    });
}

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app