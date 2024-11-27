export default function CustomLabel({ labelTitle, cssClass }) {
    return (
        <span className={cssClass}>{labelTitle}</span>
    );
}