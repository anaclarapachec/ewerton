const Carrinho = () => {
    return (
        <div className="corpo-categoria carrinho-compras">
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="info-carrinho">
                                <img src="/cenario-1.png" alt="Bolo de Chocolate" />
                                <div>
                                    <p>Bolo de Chocolate</p>
                                    <small>Valor: R$77,00</small>
                                    <br />
                                    <a href="#">Remover</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <form>
                                <input type="number" name="quantity" id="quantity" value="1" />
                            </form>
                        </td>
                        <td>R$ 77,00 </td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>
                            <div className="info-carrinho">
                                <img src="/cenario-1.png" alt="Bolo de Chocolate" />
                                <div>
                                    <p>Bolo de Chocolate</p>
                                    <small>Valor: R$77,00</small>
                                    <br />
                                    <a href="#">Remover</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <form>
                                <input type="number" name="quantity" id="quantity" value="1" />
                            </form>
                        </td>
                        <td>R$ 77,00 </td>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <td>
                            <div className="info-carrinho">
                                <img src="/cenario-1.png" alt="Bolo de Chocolate" />
                                <div>
                                    <p>Bolo de Chocolate</p>
                                    <small>Valor: R$77,00</small>
                                    <br />
                                    <a href="#">Remover</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <form>
                                <input type="number" name="quantity" id="quantity" value="1" />
                            </form>
                        </td>
                        <td>R$ 77,00 </td>
                    </tr>
                </tbody>
            </table>

            <div className="valor-total">
                <table>
                    <tbody>
                        <tr>
                            <td>Sub-Total</td>
                            <td>R$ 231,00</td>
                        </tr>
                        <tr>
                            <td>Frete</td>
                            <td>R$ 5,00</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>R$ 236,00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Carrinho;
