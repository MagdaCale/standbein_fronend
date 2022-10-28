import { useState, useEffect } from "react"
const AddProduct = () => {

    const [brand, setBrand] = useState('')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [file, setfile] = useState(null)
    const [price, setPrice] = useState('')
    const [size, setSize] = useState('')
    const [stock, setStock] = useState('')
    const [variation, setVariation] = useState('')
    const [base64, setBase64] = useState ('')

    useEffect(() => {
        if (file) {
            console.log(file.size);
            const reader = new FileReader()
            reader.onload = handleReaderLoaded
            reader.readAsDataURL(file)
        }
    }, [file])

    const handleReaderLoaded = (event) => {
        setBase64(event.target.result)
    }

    const add = () => {
        const product = {
            "brand": brand,
            "title": title,
            "category": category,
            "description": description,
            "file": base64,
            "price": price,
            "size": size,
            "stock": stock,
            "variation": variation,
        }
        console.log(product)
    }

    return(
        <section className="addProductSection">
            <h1>Add product</h1>

            <input className="productInput" onChange={(e) => { setBrand(e.target.value) }} type="text" placeholder="Brand" />
            <input className="productInput" onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder="Title" />
            <input className="productInput" onChange={(e) => { setCategory(e.target.value) }} type="text" placeholder="Category" />
            <input className="productInput" onChange={(e) => { setDescription(e.target.value) }} type="text" placeholder="Description" />
            <input className="productInput" onChange={(e) => { setfile(e.target.files[0]) }} type="file" />
            <input className="productInput" onChange={(e) => { setPrice(e.target.value) }} type="text" placeholder="Price" />
            <input className="productInput" onChange={(e) => { setSize(e.target.value) }} type="text" placeholder="Size" />
            <input className="productInput" onChange={(e) => { setStock(e.target.value) }} type="number" placeholder="Stock" />
            <input className="productInput" onChange={(e) => { setVariation(e.target.value) }} type="text" placeholder="Variation" />
            <button onClick={add} className="addProductBtn">Provide Product </button>

        </section>
    )
}

export default AddProduct

