import moment from "moment";
import React from "react";
import { Table } from "react-bootstrap";

function CompanyListTable({ list }) {
	return (
		<div>
			<div>
				<Table responsive="sm">
					<thead>
						<tr>
							<th>#</th>
							<th>Company Name</th>
							<th>Company Email</th>
							<th>Company Address</th>
							<th>Company Phone</th>
							<th>Company Country</th>
							<th>Company Age</th>
							<th>Company Description</th>
						</tr>
					</thead>
					<tbody>
						{list.map((l, key) => (
							<tr>
								<td>{key + 1}</td>
								<td>{l.company_name}</td>
								<td>{l.company_email}</td>
								<td>{l.company_address}</td>
								<td>{l.company_phone}</td>
								<td>{l.company_country}</td>
								<td>{moment().diff(l.dob, "years")} Years</td>
								<td>{l.details}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</div>
	);
}

export default CompanyListTable;
