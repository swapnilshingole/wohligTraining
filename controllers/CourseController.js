const router = Router()

router.get("/", (req, res) => {
    CourseModel.search(req.query, res.callback)
})

router.get("/:id", (req, res) => {
    CourseModel.getById(req.params, res.callback)
})

router.post("/", (req, res) => {
    console.log('req.body',req.body)
    CourseModel.saveData(req.body, res.callback)
})

router.put("/:id", (req, res) => {
    CourseModel.updateById(req, res.callback)
    res.send(`Update For Id ${req.params.id}`)
})

router.patch("/:id", (req, res) => {
    res.send(`Path For Id ${req.params.id}`)
})

router.delete("/:id", (req, res) => {
    CourseModel.deleteOne(req.params, res.callback)
    res.send(`Delete For Id ${req.params.id}`)
})

router.get("/courseBy/:page",(req, res) => {
    
    CourseModel.pegination(req, res.callback)
})
export default router
