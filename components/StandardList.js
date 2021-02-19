import Standard from './Standard'

const StandardList = ({standards}) => {
    return (
        <>
            {standards.map(standard => (
                    <Standard standard={standard}  key={standard.agent} />
                )
            )}
        </>
    )
}

export default StandardList
