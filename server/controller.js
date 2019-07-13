module.exports ={
    getAllProducts:(req, res) => {
        const db = req.app.get("db")
        // console.log(db)
    db.get_inventory()
    .then(inventory => {
        res.status(200).send(inventory);
    })
    .catch(console.error())
    }
}