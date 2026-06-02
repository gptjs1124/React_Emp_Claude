import { useParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import useEmployeeStore from '../store/employeeStore';
import EmployeeForm from '../components/employee/EmployeeForm';

function EmployeeFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { employees, fetchEmployees, addEmployee, updateEmployee } = useEmployeeStore();
  const [initialData, setInitialData] = useState(null);
  const isEditMode = Boolean(id);

  useEffect(() => {
    if (isEditMode) {
      fetchEmployees().then(() => {
        const emp = employees.find((e) => e.id === Number(id));
        if (emp) setInitialData(emp);
      });
    }
  }, [id]);

  const handleSubmit = async (formData) => {
    if (isEditMode) {
      await updateEmployee(Number(id), formData);
    } else {
      await addEmployee(formData);
    }
    navigate('/employees');
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        {isEditMode ? '직원 수정' : '직원 등록'}
      </h1>
      <EmployeeForm initialData={initialData} onSubmit={handleSubmit} isEditMode={isEditMode} />
    </div>
  );
}

export default EmployeeFormPage;
