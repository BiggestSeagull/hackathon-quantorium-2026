export const employeesListMock = {
  items: [
    {
      id: "123",
      fullName: "Иванов Иван Иванович",
      position: "Директор",
      department: "Гринатом",
    },
    {
      id: "124",
      fullName: "Петров Петр Петрович",
      position: "Программист",
      department: "Гринатом",
    },
    {
      id: "125",
      fullName: "Сидорова Анна Викторовна",
      position: "Аналитик",
      department: "Гринатом",
    },
    {
      id: "126",
      fullName: "Кузнецов Дмитрий Сергеевич",
      position: "Системный администратор",
      department: "Гринатом",
    },
  ],
};

export const employeeDetailsMocks = [
  {
    id: "123",
    fullName: "Иванов Иван Иванович",
    position: "Директор",
    department: "Гринатом",
    workplace: {
      city: "Новоуральск",
      building: "Кафе Березка",
      room: "214",
      floor: 2,
      workplaceNumber: "15",
      photoUrl: "/files/workplaces/123.jpg",
      floorPlanUrl: "/files/floor-plans/2-214.png",
      x: 200,
      y: 150,
    },
  },
  {
    id: "124",
    fullName: "Петров Петр Петрович",
    position: "Программист",
    department: "Гринатом",
    workplace: {
      city: "Новоуральск",
      building: "Кафе Березка",
      room: "214",
      floor: 2,
      workplaceNumber: "16",
      photoUrl: "/files/workplaces/124.jpg",
      floorPlanUrl: "/files/floor-plans/2-214.png",
      x: 200,
      y: 200,
    },
  },
];