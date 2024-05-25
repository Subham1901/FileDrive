import Card from "../../components/Card";

const Files = () => {
  return (
    <>
      <div className="flex flex-1 flex-wrap">
        {[...Array(10).keys()].map((data) => (
          <Card key={data} />
        ))}
      </div>
    </>
  );
};

export default Files;
