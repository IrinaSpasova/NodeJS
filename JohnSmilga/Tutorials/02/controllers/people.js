let {
    people
} = require('../data');

const getPeople =  (req, res) => {
    res.status(200).json({
        success: true,
        data: people
    });
};

const postPeople = (req, res) => {
    const {
        name
    } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({
                status: false,
                msg: 'Please, provide name!'
            });
    }
    res.status(201).json({
        success: true,
        person: name
    });

};

const peoplePostman = (req, res) => {
    const {
        name
    } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({
                status: false,
                msg: 'Please, provide name!'
            });
    }
    res.status(201).json({
        success: true,
        data: [...people, name]
    });
};

const putPeople  = (req, res) => {
    const {
        id
    } = req.params;
    const {
        name
    } = req.body;
    //console.log(id,name);
    //res.send('Hello!');

    const person = people.find((person) => person.id === Number(id));
    
    if (!person) {
        return res
            .status(404)
            .json({
                success: false,
                msg: `No person with id ${id}`
            });
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })
    res.status(200).json({
        success: true,
        data: newPeople
    });
};

const deletePeople = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = people.filter(
      (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
  };


  module.exports = {
      getPeople,
      postPeople,
      peoplePostman,
      putPeople,
      deletePeople
  }