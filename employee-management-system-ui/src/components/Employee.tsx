
export const Employee = () => {
  return (
    <tr >
    <td className="text-left px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-500">first name placeholder</div>
    </td>
    <td className="text-left px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-500">last name placeholder</div>
    </td>
    <td className="text-left px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-500">email placeholder</div>
    </td>
    <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
      <a
        className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
        Edit
      </a>
      <a
        className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
        Delete
      </a>
    </td>
  </tr>
  )
}
