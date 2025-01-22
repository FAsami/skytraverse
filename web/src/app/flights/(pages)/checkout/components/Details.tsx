import { CreateOrderPassenger } from '@duffel/api/types'
import moment from 'moment'

const Details = ({ passengers }: { passengers: CreateOrderPassenger[] }) => {
  return (
    <div className="p-3 bg-white rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4">
      {passengers.map((node, index) => {
        const passportInfo = node.identity_documents?.find(
          (node) => node.type === 'passport'
        )
        return (
          <div
            key={node.id}
            className="border border-blue-50 rounded-md p-4 h-full relative bg-neutral-50"
          >
            {index === 0 && (
              <div className="bg-blue-500 font-semibold absolute top-0 right-0 text-xs text-white rounded-bl-md px-2 py-1">
                Primary
              </div>
            )}
            <div className="text-base text-neutral-800 font-bold capitalize">
              {node.title}.&nbsp;{node.family_name}
              &nbsp;{node.given_name}
            </div>
            <div className="text-xs text-neutral-600 p-2 pt-4 border-blue-50">
              <table>
                {index === 0 && (
                  <tr>
                    <td>Email</td>
                    <td>{node.email}</td>
                  </tr>
                )}
                {index === 0 && (
                  <tr>
                    <td>Phone</td>
                    <td className="uppercase">{node.phone_number}</td>
                  </tr>
                )}
                <tr>
                  <td>Gender</td>
                  <td>{node.gender == 'f' ? 'Female' : 'Male'}</td>
                </tr>
                <tr>
                  <td>Title</td>
                  <td className="uppercase">{node.title}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{node.gender == 'f' ? 'Female' : 'Male'}</td>
                </tr>
                <tr>
                  <td>Date of birth</td>
                  <td>{moment(node.born_on).format('DD MMM,YYYY')}</td>
                </tr>
                <tr>
                  <td>Passport number</td>
                  <td>{passportInfo?.unique_identifier}</td>
                </tr>
                <tr>
                  <td className="pr-5">Passport issuing country</td>
                  <td>{passportInfo?.issuing_country_code}</td>
                </tr>
                <tr>
                  <td>Passport expired</td>
                  <td>
                    {moment(passportInfo?.expires_on).format('DD MMM,YYYY')}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { Details }
