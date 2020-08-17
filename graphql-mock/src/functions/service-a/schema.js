module.exports = `
  type TeamMember { id: ID, name: String, surname: String, age: Int, active: Boolean}
  type Query { teamMembers: [TeamMember] }
`