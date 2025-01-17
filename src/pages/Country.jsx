import { useParams } from "react-router-dom"

export default function Country() {
    const params = useParams();
    return (
        <h2>Country: {params.country}</h2>
    )
}