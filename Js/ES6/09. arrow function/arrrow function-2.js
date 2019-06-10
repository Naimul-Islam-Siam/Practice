var team = {
    members: ["John", "Jack", "Aron", "Kane"],
    subName: "superTeam",

    teamSummary: function () {
        var self = this
        return this.memebers.map(function (member) {
            return member + "works for: " + self.subName;
        });
    }
};

var team2 = {
    members: ["John2", "Jack2", "Aron2", "Kane2"],
    subName: "superTeam2",

    teamSummary: function () {
        return this.memebers.map((member) => {
            return member + "works for: " + self.subName;
        });
    }
};