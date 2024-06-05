import { ArrowLeft} from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeaderBlank = () => {
    const navigate = useNavigate();

    return (
        <header className="bg-gray-100 shadow-md h-[70px] flex items-center">
        <div className="container py-3">
          <button onClick={() => navigate('/')}>
            <ArrowLeft />
          </button>
        </div>
      </header>
    );
}

export default HeaderBlank;
