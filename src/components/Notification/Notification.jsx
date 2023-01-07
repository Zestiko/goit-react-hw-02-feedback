export const Notification = ({ title }) => {
    return <>
        {title && (
            <p>{title}</p>
        )}
    </>
}