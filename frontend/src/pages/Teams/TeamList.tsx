import TeamCard from "./TeamCard";

interface Team {
  id: string;
  name: string;
  description: string;
}

interface TeamListProps {
  teams: Team[];
  onDelete: (id: string) => void;
  onEdit: (team: Team) => void;
}

function TeamList({
  teams,
  onDelete,
  onEdit,
}: TeamListProps) {
  if (teams.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
        No Teams Found
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {teams.map((team) => (
        <TeamCard
          key={team.id}
          team={team}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TeamList;