import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            breed={pet.breed}
            id={pet.id}
            images={pet.images}
            key={pet.id}
            location={`${pet.city}, ${pet.state} `}
            name={pet.name}
          />
        ))
      )}
    </div>
  );
};

export default Results;
