import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AddCompanyModal from "../../components/modals/add-company.modal";
import CompanyListTable from "../../components/tables/company-list.table";
import { getCountries } from "../../redux/action/company.action";

function DashboardPage() {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { companyList } = useSelector((state) => state.company);

	useEffect(() => {
		dispatch(getCountries());
	}, [dispatch]);

	return (
		<div>
			<Button
				onClick={handleShow}
				variant="primary"
				size="lg"
				className="mt-5 mb-5"
			>
				Add Company
			</Button>
			{companyList.length > 0 ? (
				<CompanyListTable list={companyList} />
			) : (
				<div>No Data. Add Comapny Info.</div>
			)}

			<AddCompanyModal show={show} handleClose={handleClose} />
		</div>
	);
}

export default DashboardPage;
