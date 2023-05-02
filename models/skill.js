// best practice we name our models without an s
// because we are representing a single thing/data
// model what a single ToDo should look like

const skills = [
  { id: 125223, skill: "problem solving", acquired: true },
  { id: 127904, skill: "attention to detail", acquired: false },
  { id: 139608, skill: "knowledge of version control", acquired: false },
];

// READ action inside CRUD - Index get all of a data (todos)
function getAll() {
  return skills;
}

function getOne(id) {
    // req.params come in as strings always
    // if we need another data type, we need to change that string to the type we need
    id = parseInt(id)
    // I want to find the first element/item that matches my check 
    // if nothing is found matching that check I want to return -1
    return skills.find(skill => skill.id === id)
};

module.exports = {
  getAll, 
  getOne,
};