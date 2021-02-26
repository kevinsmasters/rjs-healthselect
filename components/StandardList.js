import Standard from './Standard'

const StandardList = ({standards, onChange}) => {
    return (
        <>
            {standards.map(standard => (
                    <Standard standard={standard} key={standard.agent} onChange={onChange} />
                )
            )}
        </>
    )
}

export default StandardList
