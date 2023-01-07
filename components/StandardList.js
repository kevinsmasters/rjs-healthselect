import Standard from "./Standard";

const StandardList = ({ standards, checkCheck, agents }) => {
  return (
    <>
      {standards.map((standard) => (
        <Standard
          standard={standard}
          key={standard.agent}
          checkCheck={checkCheck}
          agents={agents}
        />
      ))}
    </>
  );
};

export default StandardList;
