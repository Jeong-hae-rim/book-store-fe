import { styled } from "styled-components";
import ThemeSwitcher from "../header/ThemeSwitcher";
import logo from "../../assets/images/logo.png";
import { FaSignInAlt, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useCategory } from "../../hooks/useCategory";
import { useAuthStore } from "../../store/authStore";
import Button from "./Button";

export default function Header() {
  const { category } = useCategory();
  const { isloggedIn, storeLogout } = useAuthStore();

  return (
    <HeaderStyle>
      <h1 className="logo">
        <img src={logo} alt="book store logo" />
      </h1>
      <nav className="category">
        <ul>
          {category.map((item) => {
            return (
              <li key={item.categoryId}>
                <Link
                  to={
                    item.categoryId === null
                      ? "/books"
                      : `/books?category_id=${item.categoryId}`
                  }
                >
                  {item.genre}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className="auth">
        {isloggedIn && (
          <ul>
            <li>
              <Link to="/cart">장바구니</Link>
            </li>
            <li>
              <Link to="/order">주문내역</Link>
            </li>
            <li>
              <button onClick={storeLogout}>로그아웃</button>
            </li>
          </ul>
        )}

        {!isloggedIn && (
          <ul>
            <li>
              <Link to="/login">
                <FaSignInAlt />
                로그인
              </Link>
            </li>
            <li>
              <Link to="/sign-up">
                <FaRegUser />
                회원가입
              </Link>
            </li>
          </ul>
        )}
      </nav>
      <ThemeSwitcher />
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.background};

  .logo {
    img {
      width: 200px;
    }
  }

  .category {
    ul {
      display: flex;
      gap: 32px;
      li {
        a {
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({ theme }) => theme.color.text};

          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }

  .auth {
    ul {
      display: flex;
      gap: 16px;

      li {
        a,
        button {
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          line-height: 1;
          background: none;
          border: 0;
          cursor: pointer;

          svg {
            margin-right: 6px;
          }
        }
      }
    }
  }
`;
