import { BasicInfoCard } from "./BasicCardInfo"
import { ContactCard } from "./ContactCard"
import { LocationCard } from "./LocationCard"
import { StatusCard } from "./StatusCard"
import { getCompanyData } from "@/modules/empresa/actions/general_actions";

export const GridCards = async () => {
  const companyData = await getCompanyData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <BasicInfoCard companyData={companyData} />
      <LocationCard companyData={companyData} />
      <ContactCard companyData={companyData} />
      <StatusCard companyData={companyData} />
    </div>
  )
}


/*

  user: {
  ...user,
  curretCompany: id
  }

*/