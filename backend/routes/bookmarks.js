let bookmarks = []; // in memory space
let currentId = 1;

export async function addBookmark(req,res,next){
// write here
  try{
    const url = req.body.url;
    const category = req.body.category;

    if(!url|| !category){
        return res.status(400).send({ error: 'Category and Url are required' })
    }

    const newbookmark = {
        id: currentId++,
        url: url,
        category : category
    }
    bookmarks.push(newbookmark);
    res.status(200).send(newbookmark);
  }catch(error){
    return res.status(500).json({ error: "An error occurred while adding the bookmark" });
  }
}

export async function deleteBookmark(req,res,next){
// write here
    try{
        const id = req.params.id;
        const bookmarkIndex = bookmarks.findIndex(bookmark => bookmark.id == id)
        if(bookmarkIndex === -1){
            return res.status(404).json({error: "Bookmark not found"})
        }
        bookmarks.splice(bookmarkIndex,1);
        return res.status(200).json({ message: 'Bookmark deleted successfully' });
    }catch(e){
        return res.status(500).json({ error: "An error occurred while deleting the bookmark" });
    } 
}

export async function getAllBookmarks(req,res,next){
// write here
    res.send(bookmarks);
}