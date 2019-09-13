const router = Router()

router.get("/", (req, res) => {
    AsyncModel.search(req.query, res.callback)
})

router.get("/:id", (req, res) => {
    console.log("searchById")
    AsyncModel.searchById(req.params, res.callback)
})

export default router
