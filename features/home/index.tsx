import PageHeader from "@/components/page-header";
import AddNewWords from "./ui/add-new-words";

function HomeContainer() {
  return (
    <>
      <PageHeader title="Home" actions={<AddNewWords />} />
    </>
  );
}

export default HomeContainer;
