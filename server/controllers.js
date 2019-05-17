module.exports = {
  getAllInventory: (req, res) => {
    const db = req.app.get('db')
    db.get_inventory().then((books) => {
      res.status(200).send(books)
    })
  }
}