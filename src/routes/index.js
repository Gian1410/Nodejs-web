import {Router} from 'express';

const router = Router();

router.get('/', (req,res) => res.render('index.ejs', {title: 'Mi primera web Node'}))
router.get('/about', (req,res) => res.render('about.ejs', {title: 'About me'}))
router.get('/contact', (req,res) => res.render('contact.ejs', {title: 'Contac me'}))

export default router