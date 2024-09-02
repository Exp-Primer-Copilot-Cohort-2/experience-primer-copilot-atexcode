function skillsMember() {
  var member = this;
  member.skill = 'JavaScript';
  member.showSkill = function() {
    console.log(member.skill);
  };
}