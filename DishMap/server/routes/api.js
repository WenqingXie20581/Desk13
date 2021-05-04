const express = require('express');
const router = express.Router();

router.use(express.json());

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});



//Recipe

const RECIPES = [
    {id: 1, title: 'burger', nationality: 'Germany', ingredients: [{name: 'beef', quantity: '1 kg', treatment: 'null'}], directions: ['fry' ,'done']},
    {id: 2, title: 'hot pot', nationality: 'China', ingredients: [{name: 'beef', quantity: '1 kg', treatment: 'null'}, {name: 'chili', quantity: '200 g', treatment: 'null'}], directions: ['boil' ,'done']}
]

router.get('/recipe',(req,res)=>{
    res.send(RECIPES);
});

router.get('/recipe/:id', (req,res)=>{
    const recipe = RECIPES.find(r => (r.id === parseInt(req.params.id)));
    if(!recipe){
        res.status(404).send('Invalid recipe.');
    } 
    else{
        res.send(recipe);
    }
});

router.post('/recipe',(req,res)=>{
    const recipe = {
        id: RECIPES.length+1,
        title: req.body.title,
        nationality: req.body.nationality,
        ingredients: req.body.ingredients,
        directions: req.body.directions
    }
    RECIPES.push(recipe);
});





router.get('/users/authenticate', (req,res)=>{
  const { username, password } = req.body;
  const user = users.find(x => x.username === username && x.password === password);
  if (!user) return error('Username or password is incorrect');
  return ok({
    ...basicDetails(user),
    token: 'fake-jwt-token'
  })
});

router.get('/users/authenticate', (req,res)=>{
});

router.get('/users/authenticate', (req,res)=>{
});

router.get('/users/authenticate', (req,res)=>{
});


router.get('/users/authenticate', (req,res)=>{
});



module.exports = router;