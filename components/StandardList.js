import Standard from './Standard'

const StandardList = ({standards, onChange, selected}) => {
    return (
        <>
            {standards.map(standard => (
                    <Standard
                    standard={standard}
                    key={standard.agent}
                    onChange={onChange}
                    selected={selected}
                     />
                )
            )}
        </>
    )
}

export default StandardList
