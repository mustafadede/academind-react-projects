import { useParams } from "react-router-dom"

const EventDetailPage = () => {
    const params = useParams()
    return <>
        <p>Event: {params.id}</p>
    </>
}

export default EventDetailPage