import { Router } from "express"
const router = Router()

router.get('/', (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]});
});

export default router;