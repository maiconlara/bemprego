import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useIdbCandidates } from "@/utils/hooks/useIdbCandidates";

const Candidates = () => {
  const { data = [] } = useIdbCandidates();

  return (
    <div className="flex h-full w-[90vw] xl:w-[78vw] flex-col items-center justify-start gap-10  pt-10 pb-3  text-green-950 ">
      <div className="flex w-full flex-row ">
        <p className="font-poppins text-4xl font-medium">Lista de candidatos</p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Nascimento</TableHead>
            <TableHead>Vaga</TableHead>
            <TableHead>Salário</TableHead>
            <TableHead>Plano</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((candidate) => {
            return (
              <TableRow className="h-14" key={candidate.id}>
                <TableCell className="font-bold">{candidate.name}</TableCell>
                <TableCell className="font-medium">{candidate.email}</TableCell>
                <TableCell className="">{candidate.birthday.split("-").reverse().join("/")}</TableCell>
                <TableCell className="">{candidate.job}</TableCell>
                <TableCell className="">{candidate.salary}</TableCell>
                <TableCell className="">{candidate.plan}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default Candidates;
