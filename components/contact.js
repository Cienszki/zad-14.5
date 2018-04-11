var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            React.createElement('div', {className: 'contactObject'},
                React.createElement('img', {
                    className: 'contactImage',
                    src: 'http://www.vincegolangco.com/wp-content/uploads/2010/12/priest-for-facebook.jpg'
                }),
                React.createElement('p', {className: 'contactLabel'}, 'Imie: ' + this.props.item.firstName),
                React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
                React.createElement('a', {
                    className: 'contactEmail',
                    href: 'mailto ' + this.props.item.email
                }, 
                this.props.item.email)
            )
        );
    }
});