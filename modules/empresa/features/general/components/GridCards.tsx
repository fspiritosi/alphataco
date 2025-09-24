import { BasicInfoCard } from "./BasicCardInfo"
import { ContactCard } from "./ContactCard"
import { LocationCard } from "./LocationCard"
import { StatusCard } from "./StatusCard"

export const GridCards = ({ companyData }: { companyData: any }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <BasicInfoCard companyData={companyData} />
        <LocationCard companyData={companyData} />
        <ContactCard companyData={companyData} />
        <StatusCard companyData={companyData} />
      </div>
    )
}