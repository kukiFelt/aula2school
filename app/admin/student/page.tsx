import  ListStudent  from "./ListStudent";
import NewStudent from "./New";

export default function Student() {
    return (
        <div className="w-full flex flex-col justify-center mt-6">
            <div className="flex justify-center mb-6">
                <NewStudent />
            </div>

            <ListStudent />
        </div>
    )
}
// w-full aumenta o tamnho da DIV