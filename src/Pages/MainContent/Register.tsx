import RegisterMenu from "../../components/RegisterMenu";
import CategoryRegister from "./CategoryRegister";

function Register() {
    return (
        <main
            className="flex flex-col items-center pt-10 gap-10">
                <RegisterMenu/>
                <CategoryRegister/>
        </main>
    )
}

export default Register;