export const FeedbackOptions = ({options ,onLeaveFeedback}) => {
    return <div className="button-list">
        {options.map((option) => 
            <button key={option} name={option} type='button' onClick={onLeaveFeedback}>{option}</button>
        )}
    </div>
}